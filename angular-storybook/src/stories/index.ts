import { storiesOf } from '@storybook/angular';
import { KnobsComponent } from '../app/knobs/knobs.component';
import '!style-loader!css-loader!../../../dist/css/style.css';
import { ButtonComponent } from '../../../modules/angular/form';

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs/angular';


storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const textButton = text('textButton', 'Texto del boton');
    const isLoading = boolean('isLoading', true);
    const className = text('className', 'button-primary button-medium button-loading' );

    return {
      component: ButtonComponent,
      props: {
        textButton,
        isLoading,
        className
      }
    };
  });
