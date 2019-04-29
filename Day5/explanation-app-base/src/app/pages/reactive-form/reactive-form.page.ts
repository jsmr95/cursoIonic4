import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNotTemporalEmailValidator } from 'src/app/utils/validators';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  public form: FormGroup;

  public state = {
    loading: true,
    loaded: false,
    error: false,
  }

  public user: User = {} as User;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              public toastController: ToastController) {

  }

  public ngOnInit(): void {

    //Parejas de valores para la inicialización
    this.form = this.formBuilder.group({
      name: ['', [Validators.required,
      Validators.minLength(3),]],
      birthDate: '',
      sex: '',
      phone: '',
      email: ['',[Validators.required, Validators.email,
      isNotTemporalEmailValidator]],
    });

    this.peticionGet();

  }

  public retry():void {
    this.state ={
      loading: true,
      loaded: false,
      error: false,
    };
    this.peticionGet();
  }

  public peticionGet(){
    this.usersService.getRemoteUser()
      .subscribe((user: User) => {
        this.form.patchValue(user);
        this.user = user;
        this.state.loaded =true;
        this.state.loading =false;
        this.state.error =false;
    }, (error: HttpErrorResponse) => {
      console.log('Error!!... ', error);
      this.state.error = true;
      this.state.loading = false;
    }
  ) }

  public peticionPut(){

    this.usersService.putRemoteUser(this.form.value)
      .subscribe((user: User) => {
        this.presentToast('Se ha modificado!');
      }), (error: HttpErrorResponse) => {
        this.presentToast('Error!');
      }
  }

  public submitForm(): void{
    this.user = this.form.value;
    this.peticionPut();
  }

  public fillForm():void{
    const user = this.usersService.getStaticUser();

    this.form.patchValue( user );
  }

  public async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
