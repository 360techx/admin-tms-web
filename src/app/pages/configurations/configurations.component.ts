import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-configurations',
  imports: [],
  template: `<p>configurations works!</p>`,
  styleUrl: './configurations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationsComponent { }
