package controllers

import (
	"fantasy-api/models"
	"fmt"
	"github.com/astaxie/beego"
	"net/http"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "index.tpl"
}

type UserController struct {
	beego.Controller
}

func (c *UserController) Prepare() {
	fmt.Println("################")
}

func (c *UserController) Get() {
	c.Ctx.Output.SetStatus(http.StatusOK)
	g := models.Group{
		Name:        "DevOps",
		Email:       "devops-cn@google.com",
		Description: "DevOps社区组织",
	}
	if _, err := models.GroupModel.Create(&g); err != nil {
		fmt.Println(err.Error())
	} else {
		c.Data["json"] = g

		u := models.User{
			Name:        "zongyang.yu",
			Password:    "Aa123456++!",
			Email:       "15911133389@163.com",
			Display:     "小恩",
			Description: "描述",
			IsActive:    true,
			Avatar:      "1",
			Groups:      &g,
		}

		models.UserModel.Create(&u)

	}

	c.ServeJSON()

}

func (c *UserController) Post() {

}
