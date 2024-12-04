import { Component , Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector:"ems-grid",
    templateUrl:"./AcademyEmsApp.TypeGrid.html"
})

export class GridComponent{

    //column names
    gridColumns:Array<any> = new Array<any>();

    //row data
    gridData:Array<any> = new Array<any>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<any>){
        this.gridColumns = _gridColumns
    }

    @Input("grid-data")
    set setGridData(_gridData:Array<any>){
        this.setGridData = _gridData
    }

    @Output("grid-selected")
    eventEmitter: EventEmitter<any> = new EventEmitter<any>();

    SelectGrid(_selected:any){
        this.eventEmitter.emit(_selected);
    }
}