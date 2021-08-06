package routers

import (
	"fantasy-api/controllers/users"
	"github.com/astaxie/beego"
)

func init() {

	// fe stand v1 version
	namespaceV1Routers := beego.NewNamespace("/api/v1",
		beego.NSNamespace("/users",
			beego.NSInclude(&users.UserController{}),
			beego.NSInclude(&users.CaptchaController{}),
		),
	)

	beego.AddNamespace(namespaceV1Routers)
}
