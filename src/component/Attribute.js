// import React, { Component } from 'react'

// export default class Attribute extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             Id: [],
//             data: []
//         }
//     }


//     async componentDidMount() {
//         let id = []



// await fetch('https://raw.githubusercontent.com/ashishk455-CEDCOSS/category/main/categoriesCBT.json').then(res => res.json())
//     .then(data => {
//         console.log("object")
//         Object.keys(data).map(key => {

//             // console.log(key)
//             id.push(key)

//         })
//         console.log(JSON.stringify(id))

//         // this.setState({
//         //     Id: id
//         // }
//         // , () => { this.dataImport() }
//         // )
//     }
//     )



//         await fetch('https://raw.githubusercontent.com/ashishk455-CEDCOSS/category/main/array.txt').then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     data: data

//                 }
//                     , () => this.dataImport()
//                 )

//             })
//     }
//     dataImport() {
//         let ashish = {}
//         let counter = 0
//         let temp = this.state.data.slice(7000, 8837)
//         temp.forEach(async (a) => {

//             await fetch(`http://192.168.0.222/ebay/home/public/mercadohome/product/attributes?shop_id=9&category_id=${a}`, {
//                 method: "get",
//                 headers: {
//                     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTY0NjczMTEwNiwiaXNzIjoiaHR0cHM6XC9cL2FwcHMuY2VkY29tbWVyY2UuY29tIiwiYXVkIjoiMTI3LjAuMC4xIiwidG9rZW5faWQiOjE2MTUxOTUxMDZ9.V3t-AMzRqqNrRZt2PJvqV-8MBGVZ5iIv6ynsnEpqfFObtHV-BUr8DOCXkBKBDV18b3TySybpKroqc6xgFLXslnrlcPvDQHrdGMy51i-ILGZEnBkbfN9SRApNHRSF5bhGpKVdUx5hZff1cWYghdQrwi-KmByWKFW5l4aHaF183-8AOaKOIrxy1Jc7ZG3gYLVUIUYuH9p-u9D8ebceiC2R16Xc80xRi0_UDz1zRM_RYtJLc5FpoVwvo7PTDr30S8ATf5tCjXrt94iQUlPHYtxF9bSCvyuKBwKm0amNpkvoMpESNNf2MUq0932RBR80Rg4ohWc6EnF6Wxu3iFYgFZnwOg "
//                 }
//             }).then(data => data.json())
//                 .then(data1 => {
//                     console.log(counter)
//                     ashish[a] = data1
//                     counter++
//                 })
//             console.log(JSON.stringify(ashish))

//         })

//         // console.log(this.state.Id.length)
//     }
//     render() {
//         return (
//             <div>

//             </div >
//         )
//     }
// }


import React, { Component } from 'react'

export default class Attribute extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []

        }
    }





    componentDidMount() {
        let fullData = []

        fetch("https://raw.githubusercontent.com/ashishk455-CEDCOSS/category/main/categoriesCBT.json").then(res => res.json())
            .then(data => {

                console.log(data)
                // this.setState({
                //     data: data
                // }, () => this.fetchOID())
                let flag = true
                if (flag == true) {
                    Object.keys(data).map(async (key) => {
                        flag = false
                        await fetch(`http://192.168.0.222/ebay/home/public/connector/profile/searchCategory?filters[marketplace_id]=${key}`, {
                            method: "get",
                            headers: {
                                authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTY0MzU0MDg4OCwiaXNzIjoiaHR0cHM6XC9cL2FwcHMuY2VkY29tbWVyY2UuY29tIiwiYXVkIjoiMTI3LjAuMC4xIiwidG9rZW5faWQiOjE2MTIwMDQ4ODh9.ZXKtyIxaT9eliUpKmluIenZnNI1A8dishJ5pLavOROhwJAfGKODuFN81-xVJBBO46HljmsHc1fmWp7wt6IKlBikKPigQrfOswZ245QlURYK20iJQvyrGJJ0tv2x8n0YSxEBfFiSfhtry21JyueInJ_SipiXfUjXdm0g21DA5gtv7Z9KkTP4eDqY4vX1fmn3BXZvs0efQuUWK5swVP2wEsxPJU9LoOshwkqP7qd7HgbF3WWxSySnUyTqgdwPdHeId2A-gk86rbZNt-Z9V4hakDBnTmTmjcJqIS2J45U2tj0Fpd9ik5i6b0FPA591DsYZalAZIuRuWEZCL01ta1Mi_Wg "
                            }
                        }).then(res => res.json())
                            .then(data => {
                                let temp = this.state.data
                                temp.push(data.data[0])
                                this.setState({
                                    data: temp
                                }, () => { flag = true })
                            })

                    })

                }
                console.log(this.state.data)


            })
        // console.log(fullData)

        // this.setState({
        //     data: fullData
        // }, () => { console.log(this.state.data) })
        // this.fetchAttribute()
    }







    // fetchAttribute() {
    //     let temp = []
    //     fetch("https://raw.githubusercontent.com/ashishk455-CEDCOSS/category/main/total_attribute.json").then(resp => resp.json())
    //         .then(data => {
    //             Object.keys(data).map((key) => {


    //                 // console.log(data[key])
    //                 data[key]['all'].forEach(item => {
    //                     if (data[key]['required'].includes(item)) {
    //                         temp.push({

    //                             // "name": "category name",
    //                             "code": key,
    //                             "marketplace": 'MercadoLibre',
    //                             "marketplace_attribute_id": item,
    //                             "category_id": 1,
    //                             "type": "string",
    //                             // "value": {
    //                             //     "red": "REDIS BLUE",
    //                             //     "green": "green"
    //                             // },
    //                             "required": 1,
    //                             "sort_order": "1",
    //                             "mapping": {}
    //                         })
    //                     } else {
    //                         temp.push({
    //                             // "name": "category name",
    //                             "code": key,
    //                             "marketplace": 'MercadoLibre',
    //                             "marketplace_attribute_id": item,
    //                             "category_id": 1,
    //                             "type": "string",
    //                             // "value": {
    //                             //     "red": "REDIS BLUE",
    //                             //     "green": "green"
    //                             // },
    //                             "required": 0,
    //                             "sort_order": "1",
    //                             "mapping": {}
    //                         })
    //                     }
    //                 })
    //             })

    //             let list = []
    //             // console.log(temp)
    //             temp.forEach(a => {
    //                 // console.log(a)
    //                 Object.keys(this.state.data).map((key) => {
    //                     // console.log(this.state.data[key])
    //                     // console.log(key)
    //                     // console.log(a.code)
    //                     if (key == a.code) {
    //                         list.push({ ...a, name: this.state.data[key].name })
    //                         //     // temp[a]["name"] = this.state.data[key].name
    //                         //     temp[a] = {
    //                         //         ...temp[a],
    //                         //         name: this.state.data[key].name
    //                         //     }
    //                         // let some = { ...temp[a] }
    //                         // some['name'] = this.state.data[key].name
    //                         // temp[a] = some

    //                     }
    //                 })
    //             })
    //             console.log(JSON.stringify(list))

    //         })

    // }
    render() {
        return (
            <div>

            </div>
        )
    }
}

