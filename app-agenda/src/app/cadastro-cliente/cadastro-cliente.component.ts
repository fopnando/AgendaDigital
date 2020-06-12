import { EstadoBr } from './../share/models/estado-br';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DropdownService } from './../share/service/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from './../share/service/consulta-cep-service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})


export class CadastroClienteComponent implements OnInit {
  formulario: FormGroup;

  /*estados: EstadoBr[];*/
  estados: Observable<EstadoBr[]>;
    constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private dropdownService: DropdownService,
              private cepService: ConsultaCepService ) { }

    ngOnInit() {

    this.estados = this.dropdownService.getEstadosBr();
    this.formulario = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    email: [null, [Validators.required, Validators.email]],

     endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null]
    }),
  });
 }

 verificaValidTouched(campo: string) {

  return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;


}
 aplicaCssErro(campo) {


  return {
    'has-error': this.verificaValidTouched(campo),
    'has-feedback': this.verificaValidTouched(campo)
  };
  }

  onsubmit() {

    if (this.formulario.valid) {
    this.http
    .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados);
      // reseta o form

    },
    (error: any) => alert('erro'));
    } else {
      console.log('formulario Inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  consultaCep() {

    // Obtendo o valor do CEP informado no Formulario
      const cep = this.formulario.get('endereco.cep').value;

      if (cep != null && cep !== '') {
        this.cepService.consultaCep(cep)
        .subscribe(dados => this.populaDadosForm(dados));
      }
    }

    populaDadosForm(dados) {
      this.formulario.patchValue({
        endereco: {
       cep: dados.cep,
       rua: dados.logradouro,
       complemento: dados.complemento,
       bairro: dados.bairro,
       cidade: dados.localidade,
       estado: dados.uf
      }
      } );
     }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);

      }
    });

}
}

