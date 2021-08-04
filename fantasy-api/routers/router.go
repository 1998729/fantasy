package routers

import (
	"fantasy-api/controllers"
	"github.com/astaxie/beego"
)

func init() {
	// fe v1 version
	namespaceV1Routers := beego.NewNamespace("/api/v1",
		beego.NSNamespace("/users",
			beego.NSInclude(&controllers.UserController{}),
		),
	)

	beego.AddNamespace(namespaceV1Routers)
}
