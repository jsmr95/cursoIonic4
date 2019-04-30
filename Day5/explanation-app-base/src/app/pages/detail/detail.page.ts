import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { FruitsService } from '../../services/fruits.service';
import { Fruit } from '../../models/Fruit.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public form: FormGroup;
  public fruit: Fruit;
  // public fruit = {id: 1, name:"Apple", image: 'apple.png', description: 'Hola'};

  public state = {
    loading: true,
    loaded: false,
    error: false,
  }

  constructor( private fruitsService: FruitsService,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute,
             public toastController: ToastController)
  {
   }

   ngOnInit() {
     this.form = this.formBuilder.group({
       id: '',
       name: '',
       image: '',
       description: '',
     });
     this.peticionGet();
   }

   public submitForm(): void{
     this.peticionPut();
   }

   public peticionPut(){
     const index = +this.route.snapshot.params.index + 1;
     this.fruit = this.fruit;
     this.fruit.description = this.form.value.description;

     this.fruitsService.putRemoteFruit(this.fruit,index)
       .subscribe((fruit: Fruit) => {
         this.presentToast('Se ha modificado!');
       }), (error: HttpErrorResponse) => {
         this.presentToast('Error!');
       }
   }

   public async presentToast(message) {
     const toast = await this.toastController.create({
       message: message,
       duration: 2000
     });
     toast.present();
   }

   public peticionGet(){
     const index = +this.route.snapshot.params.index + 1;
     this.fruitsService.getFruit(index)
       .subscribe((fruit: Fruit) => {
         this.fruit = fruit;
         this.state.loaded =true;
         this.state.loading =false;
         this.state.error =false;
     }, (error: HttpErrorResponse) => {
       console.log('Error!!... ', error);
       this.state.error = true;
       this.state.loading = false;
     }
   ) }

   public volver():void{
     console.log('Volver');
   }

   public retry():void {
     this.state ={
       loading: true,
       loaded: false,
       error: false,
     };
     this.peticionGet();
   }
}
