import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VendaService } from '../sale.service';
import { ProdutoService } from '../../product/product.service';
import { Produto } from '../../product/product.model';

@Component({
  selector: 'app-venda-create',
  templateUrl: './sale-create.component.html',
  standalone: true,
  styleUrls: ['./sale-create.component.css'],
  imports: [ReactiveFormsModule]
})
export class VendaCreateComponent implements OnInit {
  vendaForm: FormGroup;
  produtos: Produto[] = [];

  constructor(
    private fb: FormBuilder,
    private vendaService: VendaService,
    private produtoService: ProdutoService
  ) {
    this.vendaForm = this.fb.group({
      produtoId: ['', Validators.required],
      quantidade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  onCreate(): void {
    if (this.vendaForm.valid) {
      this.vendaService.createVenda(this.vendaForm.value).subscribe();
    }
  }
}
