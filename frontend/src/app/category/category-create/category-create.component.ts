import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaService } from '../category.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './category-create.component.html',
  standalone: true,
  styleUrls: ['./category-create.component.css'],
  imports: [ReactiveFormsModule]
})
export class CategoriaCreateComponent implements OnInit {
  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder, private categoriaService: CategoriaService) {
    this.categoriaForm = this.fb.group({
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onCreate(): void {
    if (this.categoriaForm.valid) {
      this.categoriaService.createCategoria(this.categoriaForm.value).subscribe();
    }
  }
}