import { coordinateData } from "./coordinate-data"

/*`const` is a signal that the identifier won’t be reassigned.
 `let` is a signal that the variable may be reassigned, such as a counter in a loop,
 or a value swap in an algorithm.
 It also signals that the variable will be used only in the block it’s defined in,
  which is not always the entire containing function.
*/
// const 定义的基础数据类型不变。定义的对象数据类型指针不变，值可变。
export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
