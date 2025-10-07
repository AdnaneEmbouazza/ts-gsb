import { Routes } from '@angular/router';
import {Counter} from './counter/counter';
import { CounterList } from './counter-list/counter-list';
import { Img } from './img/img';

export const routes: Routes = [
    {path: '' , component: Counter },
    {path: 'counter' , component:Counter },
    {path: 'counter/counter-list' , component:CounterList},
    {path : 'img' , component:Img}
];
