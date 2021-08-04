package models

var (
	UserModel  *User
	GroupModel *Group
)

func init() {
	UserModel = &User{}
	GroupModel = &Group{}
}
