import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName = 'Machine à laver';
  @Input() appareilStatus = 'éteint';
  @Input() index;
  @Input() id;

  constructor(private appareilService: AppareilService, private authService: AuthService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.appareilStatus === 'éteint') {
      return 'red';
    } else {
      if (this.appareilStatus === 'allumé') {
        return 'green';
      }
    }
  }

  getStatus() {
    return this.appareilStatus;
  }

  onSwitch() {
    if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    } else { if (this.appareilStatus === 'allumé') { this.appareilService.switchOffOne(this.index); } }
  }
}
