import { Meta, Story } from '@storybook/react'
import Checkbox, { CheckboxProps } from '../components/Checkbox';

const meta: Meta = {
  component: Checkbox,
  title: 'Checkbox'
};
export default meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args = {
  label: 'Label'
}

export const DefaultRTL = Template.bind({});
DefaultRTL.args = {
  ...Default.args,
  label: 'תווית',
}
DefaultRTL.decorators = [(Story) => <div dir='rtl'><Story /></div>]




