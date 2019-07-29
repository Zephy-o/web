import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { FooterComponent } from "../components/footer"
import NavbarComponent from "../components/navbar"
import CommandData from "../data/commands"
import * as Fuse from "fuse.js"
import { Else, If } from "react-condition"
import { For } from "react-loops"

export default class Commands extends React.Component<RouteComponentProps> {
  
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="section hero is-textured">
          <div className="container content">
            <h1 className="title has-text-light">Commands for Miki</h1>
          </div>
        </div>
        <div className="section container content">
          <div className="section">
            <h3>Looking for something..?</h3>
            <p className="control has-icons-left">
              <input
                placeholder="search..."
                type="text"
                id="searchbar"
                className="input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>

          <div className="columns">
            <section className="column" id="commands">
              {CommandData.map((value: any, key) => {
                return value.commands.map((cmdValue, cmdKey) => {
                  return (
                    <article key={cmdKey} className="card" data={cmdValue.name}>
                      <div className="card-content">
                        <div className="columns">
                          <div className="column.is-narrow">
                            <b>>{cmdValue.name}</b>
                          </div>
                          <CommandDetailscolumn value={cmdValue} />
                          <div className="column is-narrow">
                            <p>{cmdValue.description}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })
              })}
            </section>
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
}

function CommandDetailscolumn(props: { value: any }) {
  return (
    <div className="column">
      <For of={props.value.usages} as={(usageValue, { key: usagekey }) =>
        <div key={usagekey}>
          <If test={usagekey !=0}>
            <div className="is-divider" data-content="OR"></div>
          </If>

          <If test={usageValue.parameters}>
            <For of={usageValue.parameters} as={(paramValue, {key: paramKey }) => 
              <span key={paramKey}>
                <If test={paramValue.constant}>
                  <b className="seperated-h">{paramValue.name}</b>
                </If>
                <Else>
                  <If test={paramValue.required}>
                    <a className="tooltip seperated-h tag is-primary" data-tooltip={paramValue.description}> {paramValue.name} </a>
                  </If>
                  <If test={!paramValue.required}>
                  <a className="tooltip seperated-h tag is-info" data-tooltip={paramValue.description}> 
                    {paramValue.name}
                  </a>
                  </If>
                </Else>
              </span>
            }/>
          </If>

          <If test={!usageValue.parameters}>
            <div className="tooltip seperated-h tag is-disabled" data-tooltip="this means it has no parameters :)">
              none
            </div>
          </If>
        </div>
      }/>
    </div>
  )
}

