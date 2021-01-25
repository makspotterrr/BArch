import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppComponent } from './app.component';
import { MatButtonHarness } from '@angular/material/button/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
      .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    loader  = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should generate array default size', async () => {
    const btnGenerate = await loader.getHarness(MatButtonHarness.with({ selector: '[data-test-id="btn-generate"]' }));
    await btnGenerate.click();

    const app = fixture.componentInstance;
    expect(app.items.length).toBe(app.arraySize);
  });
});
