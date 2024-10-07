import { PanelPlugin } from '@grafana/data';
import { ImagePanel } from 'components/TestImage';
import { PanelOptions } from 'type';
//

export const plugin = new PanelPlugin<PanelOptions>(ImagePanel).setPanelOptions((builder) => {
//data has been genera
  return builder
    .addTextInput({
      path: 'text',
      name: 'text',
      // description: 'Description of panel option',
      // defaultValue: 'https://',
    })

    .addTextInput({
      path: 'url',
      name: 'url',
      // description: 'Description of panel option',
      defaultValue: 'https://',
    })

    .addColorPicker({
      path:'color',
      name:'color'
    })
  //we dont need to set up data links:
    .addTextInput({
      path:'data_links',
      name:'Data Links'
    })
    .addDashboardPicker({
      path: 'dash',
      name: 'Dashboard Link',
    })
  
  
    .addBooleanSwitch({
      path: 'count',
      name: 'count',
    })
    .addTimeZonePicker({
      path:'time',
      name:'time'
    })
    .addDashboardPicker({
      name:'dash',
      path:'dash'
    })

    .addFieldNamePicker({
      path:'name',
      name:'name',
      // description:
      // 'Name of the field with URL.if not specified first field will be taken',
      // settings:{
        
      //   filter:(f:Field)=>f.type === FieldType.string,
      //   noFieldsMessage:'No strings fields Found'
      // }
      
    })

    .addMultiSelect({
      path:'multi',
      name:'multi'
    })

    .addNumberInput({
      path:'num',
      name:'num'
    })

    // .addRadio({
    //   path:'test',
    //   name:'test'
    // })

    .addSliderInput({
      path:'slider',
      name:'slider'
,    })

});
    // .addUnitPicker({
    //  path:'picker',
    //  name:'picker'
    // })

    // .addFieldNamePicker({
    //   path:'name',
    //   name:'url',
    //   description:
    //   'url ',
    //   // settings:{
    //   //   filter:(f:Field)=>f.type === FieldType.string,
    //   //   noFieldsMessage:'No url  Found'
    //   // }
      
    // });

    

    // .addFieldNamePicker({
    //   path:'name',
    //   name:'Field name'
    // })

   

    // .addFieldNamePicker({
    //   path:'URL',
    //   name:'Field name',
    //   description:
    //   'Put Url of image which you want.....',
    
    // })

    // .addTextInput({
    //   path:'text',
    //   name:'Field text',
    //   description:'text should be string',
    //   settings:{
    //     filter:(f:Field)=>f.type === FieldType.string,
    //     noFieldsMessage:'No text Found'

    //   }
    // })
    

 //   return builder;
 
    

