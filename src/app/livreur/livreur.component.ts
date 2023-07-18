import { Component } from '@angular/core';
import { serviceLivreur } from './service/serviceLivreur';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss'],
})
export class LivreurComponent implements OnInit {
  constructor(private service: serviceAdmin) {}
  ngOnInit(): void {}
}
