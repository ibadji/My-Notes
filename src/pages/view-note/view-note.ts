import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../models/node.model';
import { NoteService } from '../../providers/note-service/note-service';
import { AddNotePage } from '../add-note/add-note';


@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note: Note;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private noteService: NoteService) {
      this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }
  editNote(createDate: number) {
    this.navCtrl.pop();
    this.navCtrl.push(AddNotePage, { note: this.note });
    this.noteService.deleteNote(createDate);
  }
}
