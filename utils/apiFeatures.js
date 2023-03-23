class ApiFeatures {
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr
    }
    search(){
        const keyword = this.queryStr.keyword ? 
    
        { title: { $regex: this.queryStr.keyword, $options: 'i' } }
        :{}
        // console.log(keyword)
        this.query = this.query.find({...keyword})
        return this
    }

    // filter for specified category
    filter(){
        const queryCopy = {...this.queryStr}
        const removeFields = ['keyword', 'page', 'limit']
        removeFields.forEach((value, index, arr)=>{
            arr.splice(index, arr.length)
        })

        // filter for prize and rattings
        // console.log(queryCopy)
        // JSON.stringify() convert JSON into String
        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key) => `$${key}` )
        // thi.query means Prodcuts.find
        // JSON.parse() conveet object into JSON 
        this.query = this.query.find(JSON.parse(queryStr))
        // console.log(queryStr)
        return this
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1
        const skipItem = resultPerPage * (currentPage-1)
        this.query = this.query.limit(resultPerPage).skip(skipItem)
        return this
    }







}
module.exports = ApiFeatures