import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { FooterComponent } from "../components/footer"
import NavbarComponent from "../components/navbar"
import CommandData from "../data/commands"
import * as Fuse from "fuse.js"
import { object } from "prop-types"

export default class Commands extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props)
    this.state = { usageValue: object }
  }

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
                return value.commands.map((cmdValue: any, cmdKey: any) => {
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

function CommandDetailscolumn(props: { value: object }) {
  console.log(props.value)
  return (
    <div className="column">
      {props.value.usages.map((usageValue, usagekey) => (
        <div key={usagekey}>
          {usagekey != 0 ? (
            <div className="is-divider" data-content="OR"></div>
          ) : null}
          {usageValue.parameters ? (
            usageValue.parameters.map((paramValue, paramKey) => (
              <span key={paramKey}>
                {paramValue.constant ? (
                  <b className="seperated-h">{paramValue.name}</b>
                ) : paramValue.required ? (
                  <a
                    className="tooltip seperated-h tag is-primary"
                    data-tooltip={paramValue.description}
                  >
                    {paramValue.name}
                  </a>
                ) : (
                  <a
                    className="tooltip seperated-h tag is-info"
                    data-tooltip={paramValue.description}
                  >
                    {paramValue.name}
                  </a>
                )}
              </span>
            ))
          ) : (
            <div
              className="tooltip seperated-h tag is-disabled"
              data-tooltip="this means it has no parameters :)"
            >
              none
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
