import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion } from 'src/app/models/publicaciones';
@Component({
  selector: 'app-news-aeesfot-modify',
  templateUrl: './news-aeesfot-modify.component.html',
  styleUrls: ['./news-aeesfot-modify.component.css']
})
export class NewsAeesfotModifyComponent implements OnInit {
  usuario:Usuario=new Usuario();
  publicacion:Publicacion=new Publicacion();
  valor=false;
  valor2=false;
  gp:string="";
  constructor(private auth:AuthService,
    private activatedRoute:ActivatedRoute,
    private post:PublicacionService) { 
      this.activatedRoute.params.subscribe(params=>{
        if(params['id']!=undefined){
          this.auth.getUser(params['id']).subscribe(
             resp=>{
              this.usuario=resp;
              if(resp!=undefined){
                this.valor=true;
               
              }
            }
          )
        }
        if(params['idp']!=undefined){
          this.post.getPublicacion(params['idp']).subscribe(
             res=>{
              this.publicacion=res;
              if(res!=undefined){
                this.valor2=true;
               
              }
            }
          )
        }
        if(params['gp']!=undefined){
          this.gp=params['gp'];
        }
      })

    }

  ngOnInit(): void {
  }

}
