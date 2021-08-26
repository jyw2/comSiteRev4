import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class OverlayService{

  private overlayCall = new Subject<string>()

  callOverlay(imgLink:string){
    this.overlayCall.next(imgLink)
  }

  getOverlayCallObs(){
    return this.overlayCall
  }

}
