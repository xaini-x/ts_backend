import { errorCode, httpException } from "./route";

export class badRequestException extends httpException{
    constructor(message :string , errorCode:errorCode ){
        super(message,errorCode,400,null);
    }
}