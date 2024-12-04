export interface ILogger{
    LogError(error: any):any;
}

export class BaseLogger implements ILogger{
    LogError(error: any){

    }
}

export class FileLogger extends BaseLogger{
    override LogError(error: any){
        console.log("Error - " + error);
    }
}