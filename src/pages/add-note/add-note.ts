import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/node.model';


@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private NoteService: NoteService) {  
        this.formGroup = new FormGroup({
          title: new FormControl(),
          content: new FormControl(),
          date: new FormControl(),
        })
        if( this.navParams.get('note') )
        {
          this.date = this.navParams.get('note').date;
          this.title = this.navParams.get('note').title;
          this.content = this.navParams.get('note').content;
        }
  }

  saveNote(note: Note) {
    this.NoteService.saveNote(note);
    this.navCtrl.pop();
}

}
