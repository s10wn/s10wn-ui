import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyFlex from '../MyFlex/MyFlex'

export default {
    title: 'Example/FlexBox',
    component: MyFlex
} as ComponentMeta<typeof MyFlex>;

const Template: ComponentStory<typeof MyFlex> = (args) => <MyFlex {...args} />