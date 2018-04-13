import base64 				from './src/tools/base64'
import cookie 				from './src/tools/cookie'
import dateFormat 			from './src/tools/date/format'
import dateRange 			from './src/tools/date/range'
import dateFriendly 		from './src/tools/date/friendly'
import numberComma 			from './src/tools/number/comma'
import numberPad 			from './src/tools/number/pad'
import numberRandom 		from './src/tools/number/random'
import numberRange 			from './src/tools/number/range'
import querystring 			from './src/tools/querystring'
import trim 				from './src/tools/string/trim'
import array2string 		from './src/tools/string/array2String'
import mobile 				from './src/tools/validator/chinaMobile'

export default{
	base64,
	cookie,
	date:{format:dateFormat,range:dateRange,friendly:dateFriendly},
	number:{comma:numberComma,pad:numberPad,random:numberRandom,range:numberRange},
	querystring,
	string:{trim:trim},
	trim,
	array2string,
	test:{mobile}
}

