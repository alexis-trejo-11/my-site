import { Component, input } from '@angular/core';
import { CollectionModel } from '../../../api-tester.model';
import { CollectionFolder } from './collection-folder/collection-folder';

@Component({
  selector: 'app-collection-tree',
  imports: [CollectionFolder],
  templateUrl: './collection-tree.html',
  styleUrl: './collection-tree.css',
})
export class CollectionTree {
  collection = input.required<CollectionModel>();
}
