class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
    this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ?{
            name:{
                //mogodb ka operator regular expression
                $regex:this.queryStr.keyword,
                $options:"i",// small i is case sensetive he search small letter also
            }
        }:{};
        
        this.query=this.query.find({...keyword})
        return this;
    }
    filter(){
        const queryCopy={...this.queryStr}  //spred operator-- querystr ek object hai js m
        // object throw refrence pass hotha hai querycopey ko value nahi 
        //milaga aur ager this.querystr kertha hai tho
        

        //remove some field for category
        const removeFields=["keyword","page","limit"];
        removeFields.forEach(key=>delete queryCopy[key])
        //filter for price and rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    
        this.query = this.query.find(JSON.parse(queryStr));
    
this.query=this.query.find(JSON.parse(queryStr));
return this;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
    
        const skip = resultPerPage * (currentPage - 1);
    
        this.query = this.query.limit(resultPerPage).skip(skip);
    
        return this;
      }
}
module.exports=ApiFeatures;