'use strict'

class Collection{

    constructor(model){
        this.model=model
    }

    async create(obj){
        try{
            let newRecord= await this.model.create(obj)
            return newRecord;
        }catch(err){console.log(err);}
    }

    async read(id){
        try{
            let record;
            if(id){
                record=await this.model.findOne({where:{id}});
            }else{
                record=await this.model.findAll();
            }
            return record;
        }catch(err){console.log(err);}
    }

    async update(id,obj){
        try{
            let recordId= await this.model.findOne({where:{id}});
            let updatedRecord=await recordId.update(obj);
            return updatedRecord;
        }catch(err){console.log(err);}
    }

    async delete(id){
        try{
            let deletedRecord= await this.model.destroy({where:{id}})
            return deletedRecord
        }catch(err){console.log(err);}
    }

}
module.exports=Collection;