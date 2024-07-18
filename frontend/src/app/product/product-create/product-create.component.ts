import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../product.service';
import { CategoriaService } from '../../category/category.service';
import { Categoria } from '../../category/category.model';

@Component({
  selector: 'app-produto-create',
  templateUrl: './product-create.component.html',
  standalone: true,
  styleUrls: ['./product-create.component.css'],
  imports: [ReactiveFormsModule]
})
export class ProdutoCreateComponent implements OnInit {
  produtoForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) {
    this.produtoForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      categoriaId: ['', Validators.required],
      estoque: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  onCreate(): void {
    if (this.produtoForm.valid) {
      this.produtoService.createProduto(this.produtoForm.value).subscribe();
    }
  }
}
