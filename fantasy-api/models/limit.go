package models

type URLFrequencyLimit struct {
	Id           int
	URI          string `orm:"column(uri);unique;"json:"uri"`
	Expired      string `orm:"column(expired)"json:"expired"`
	MaximumVisit int64  `orm:"column(maximum_visit)"json:"maximum_visit"`
}

func (*URLFrequencyLimit) TableName() string {
	return URLFrequencyLimitTableName
}

func (*URLFrequencyLimit) QueryRecordByURI(uri string) (*URLFrequencyLimit, error) {
	r := &URLFrequencyLimit{URI: uri}
	err := Orm().Read(r, "URI")
	return r, err
}
