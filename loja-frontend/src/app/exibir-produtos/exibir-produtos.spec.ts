import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibirProdutos } from './exibir-produtos';

describe('ExibirProdutos', () => {
  let component: ExibirProdutos;
  let fixture: ComponentFixture<ExibirProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibirProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
