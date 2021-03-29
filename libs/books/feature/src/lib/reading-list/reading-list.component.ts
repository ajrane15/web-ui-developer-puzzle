import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, markFinished, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  finished(item: ReadingListItem) {
    this.store.dispatch(markFinished({ id: item.bookId, changes: {
      finished: true,
      finishedDate: (new Date()).toISOString()
    } }));
  }
}
