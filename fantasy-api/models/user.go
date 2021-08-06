package models

import "time"

type User struct {
	Id          int
	Name        string     `orm:"index;unique;size(100)"`
	Password    string     `orm:"size(255)" json:"-"`
	Email       string     `orm:"size(200)" json:"email,omitempty"`
	Display     string     `orm:"size(200)" json:"display,omitempty"`
	Description string     `orm:"null"json:"description"`
	IsAdmin     bool       `orm:"default(False)" json:"isAdmin"`
	IsActive    bool       `orm:"default(True)" json:"isActive"`
	Avatar      string     `orm:"null"json:"avatar"`
	LastLogin   *time.Time `orm:"auto_now_add;type(datetime)" json:"lastLogin,omitempty"`
	Deleted     bool       `orm:"default(false)" json:"deleted,omitempty"`
	CreateTime  *time.Time `orm:"auto_now_add;type(datetime)" json:"createTime,omitempty"`
	UpdateTime  *time.Time `orm:"auto_now;type(datetime)" json:"updateTime,omitempty"`
	Groups      *Group     `orm:"rel(fk)"`
}

func (*User) TableName() string {
	return UserTableName
}

func (*User) Create(v *User) (id int64, err error) {
	return Orm().Insert(v)
}
