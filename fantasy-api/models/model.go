package models

var (
	UserModel              *User
	GroupModel             *Group
	URLFrequencyLimitModel *URLFrequencyLimit
)

func init() {
	UserModel = &User{}
	GroupModel = &Group{}
	URLFrequencyLimitModel = &URLFrequencyLimit{}
}
