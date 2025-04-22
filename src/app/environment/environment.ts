import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Environment {
  // Api:string = "https://y9u1c7vqx4.execute-api.ap-south-1.amazonaws.com/Prod"
  Api:string = "https://d3q4n7cd6yvt05.cloudfront.net/Prod"
  Main:string = "https://d3cf6hrf5sigu6.cloudfront.net"
}
