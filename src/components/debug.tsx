import { Fragment } from "react";
import {Component} from "react";
import {
  ButtonItem,
  Field,
  PanelSectionRow,
  staticClasses,
  Router,
} from "decky-frontend-lib";
import * as backend from "../backend";
import {
  BACKEND_INFO,
  DRIVER_INFO,
} from "../consts";
import { get_value, target_usdpl, version_usdpl} from "usdpl-front";

let eggCount = 0;

export class Debug extends Component<{}> {
    render() {
        return buildDebug();
    }
}

function buildDebug() {
  return (<Fragment>{/* Version Info */}
      <div className={staticClasses.PanelSectionTitle}>
        {eggCount % 10 == 9 ? "Ha! Nerd" : "Debug"}
      </div>
      <PanelSectionRow>
        <Field
          label={eggCount % 10 == 9 ? "PowerTools" : "Native"}
          onClick={()=> {
            if (eggCount % 10 == 9) {
              // you know you're bored and/or conceited when you spend time adding an easter egg
              // that just sends people to your own project's repo
              Router.NavigateToExternalWeb("https://github.com/NGnius/PowerTools");
            }
            eggCount++;
          }}>
          {eggCount % 10 == 9 ? "by NGnius" : get_value(BACKEND_INFO)}
        </Field>
      </PanelSectionRow>
      <PanelSectionRow>
        <Field
          label="Framework"
          onClick={()=> eggCount++}>
          {eggCount % 10 == 9 ? "<3 <3 <3" : target_usdpl()}
        </Field>
      </PanelSectionRow>
      <PanelSectionRow>
        <Field
          label="Driver"
          onClick={()=> eggCount++}>
          {eggCount % 10 == 9 ? "Tracy Chapman" : get_value(DRIVER_INFO)}
        </Field>
      </PanelSectionRow>
      <PanelSectionRow>
        <Field
          label="USDPL"
          onClick={()=> {
            if (eggCount % 10 == 9) {
              // you know you're bored and/or conceited when you spend time adding an easter egg
              // that just sends people to your own project's repo
              Router.NavigateToExternalWeb("https://github.com/NGnius/usdpl-rs");
            }
            eggCount++;
          }}>
          v{version_usdpl()}
        </Field>
      </PanelSectionRow>
      {eggCount % 10 == 9 && <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={(_: MouseEvent) => {
            backend.idk();
          }}
        >
        ???
        </ButtonItem>
      </PanelSectionRow>}
    </Fragment>);
}