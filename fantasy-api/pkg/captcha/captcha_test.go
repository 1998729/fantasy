package captcha

import (
	"fmt"
	"testing"
)

func TestPic(t *testing.T) {
	s := ImgText(100, 200, GetRandStr(6))
	fmt.Println(s)
}
