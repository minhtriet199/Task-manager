
import jwtDecode from "jwt-decode";

export interface DataResult {  
    Message: string;
    Data?: any;  
    Result: ResultMode;
    ErrorCode: number;
}


export interface LoginDataResult {  
    Token: string;
}

export enum ResultMode {
    Success = 0,
    Error = 1,
    Warning = 2,
}

export class Configuration{
    public Base_URL = "http://192.168.122.245:7260/";
}

export class AccessToken{
    public static GetAccessToken(){
        return localStorage.getItem('Token');
    }
    public static SetAccessToken(Token:string){
        return localStorage.setItem('Token',Token);
    }
    public static SetUserInfo(){
        const JWTtoken = this.GetAccessToken();
        let data: any = null;
        if (JWTtoken) {
            data = jwtDecode(JWTtoken);
            const user = JSON.parse(data.user);
            const exprDate = new Date(data.Expires_in)
            localStorage.setItem('userID', user.Id);
            localStorage.setItem('userName', user.UserName);
            localStorage.setItem('userEmail', user.Email);
            localStorage.setItem('expr', (Number(exprDate)).toString());
            localStorage.setItem('role',user.Role);
        }        
    }
}
// currentTimeStamp +
export class UserInfo{
    public readonly userID :string;
    public readonly userName: string;
    public readonly userEmail: string;
    public readonly expr_Date: string;
    public readonly role: number;
    
    constructor() {
        this.userName = localStorage.getItem('userName') || '';
        this.userID = localStorage.getItem('userID') || '';
        this.userEmail = localStorage.getItem('userEmail') || '';
        this.expr_Date = localStorage.getItem('expr') || '';
        this.role = Number(localStorage.getItem('role')) || 1;
    }
}
 export class getCurrentTime{
    public readonly Currenttime:number;
    constructor() {
        this.Currenttime = Number(new Date());
    }
 }