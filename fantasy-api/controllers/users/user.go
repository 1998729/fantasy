package users

import "github.com/astaxie/beego"

type UserController struct {
	beego.Controller
}

func (t *UserController) Login() {}

func (t *UserController) Logout() {}

func (t *UserController) CurrentUser() {}
