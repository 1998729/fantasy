package users

import (
	"fantasy-api/models"
	"fantasy-api/pkg/captcha"
	"github.com/astaxie/beego"
	"net/http"
)

type CaptchaController struct {
	beego.Controller
}

// @router /captcha [get]
func (t *CaptchaController) GetCaptcha() {

	UriLimit := captcha.UserAccessURIInfo{
		ClientIP: t.Ctx.Request.RemoteAddr,
		URI:      t.Ctx.Request.RequestURI,
	}

	var img []byte

	status := http.StatusOK

	if rLimit, err := models.URLFrequencyLimitModel.QueryRecordByURI(UriLimit.URI); err == nil {
		UriLimit.Expired = rLimit.Expired
		UriLimit.MaxCount = rLimit.MaximumVisit

		if img, err = captcha.GetCaptchaByCache(UriLimit); err != nil {
			status = http.StatusForbidden
		}
	}

	t.Ctx.Output.SetStatus(status)
	t.Ctx.Output.ContentType("png")
	t.Ctx.Output.Body(img)
}
