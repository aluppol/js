import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ServerClientService} from "./server-client.service";

@Component({
    selector: 'app-server-communication',
    templateUrl: './server-communication.component.html',
    styleUrls: ['./server-communication.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ServerCommunicationComponent implements OnInit {
  title: string;

  constructor(private server: ServerClientService) {
  }

  ngOnInit(): void {
    this.server.communicateServer().subscribe((title)=>{
      this.title = title;
    });
  }

}
