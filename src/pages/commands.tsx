import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import { FooterComponent } from "../components/footer"
import NavbarComponent from "../components/navbar"
import CommandData from "../data/commands"
import * as Fuse from "fuse.js"
import { Else, If } from "react-condition"
import { For } from "react-loops"

function findElementByAttribute(
  elements: HTMLCollection,
  attributename: string,
  value: string
): Element {
  for (var i = 0; i < elements.length; i++) {
    var elem = elements.item(i)
    if (elem.getAttribute(attributename) == value) {
      return elem
    }
  }
  return null
}

export default class Commands extends React.Component<RouteComponentProps> {
  state = {
    commands: [],
    allcommandnames: [],
  }

  componentDidMount() {
    let commands = document.getElementById("commands")
    for (var i = 0; i < commands.childElementCount; i++) {
      let item = commands.children.item(i)
      let attr = item.getAttribute("data")
      this.state.commands[this.state.commands.length] = {
        command: attr,
      }
      this.state.allcommandnames[this.state.allcommandnames.length] = attr
    }
    console.log(this.state.allcommandnames);
    
  }

  handleSearch(input: string) {
    let commands = document.getElementById("commands")

    let fuse = new Fuse(this.state.commands, {
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["command"],
      id: "command",
    })
    let results = fuse.search(input)
    
    if ((input.length === 0 || input == "")) {
      results = this.state.allcommandnames
    }

    console.log("res", this.state.allcommandnames);
    
    for (let i = 0; i < commands.children.length; i++) {
      let item = commands.children.item(i)
      if (results.includes(item.getAttribute("data"))) {
        item.classList.remove("is-hidden")
      } else {
        item.classList.add("is-hidden")
      }
    }

    for (let i = results.length - 1; i >= 0; i--) {
      let item = findElementByAttribute(commands.children, "data", results[i])
      commands.insertBefore(item, commands.children[0])
    }
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
                onChange={e => this.handleSearch(e.target.value)}
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
      <For
        of={props.value.usages}
        as={(usageValue: any, { key: usagekey }) => (
          <div key={usagekey}>
            <If test={usagekey != 0}>
              <div className="is-divider" data-content="OR"></div>
            </If>

            <If test={usageValue.parameters}>
              <For
                of={usageValue.parameters}
                as={(paramValue: any, { key: paramKey }) => (
                  <span key={paramKey}>
                    <If test={paramValue.constant}>
                      <b className="seperated-h">{paramValue.name}</b>
                    </If>
                    <Else>
                      <If test={paramValue.required}>
                        <a
                          className="tooltip seperated-h tag is-primary"
                          data-tooltip={paramValue.description}
                        >
                          {" "}
                          {paramValue.name}{" "}
                        </a>
                      </If>
                      <If test={!paramValue.required}>
                        <a
                          className="tooltip seperated-h tag is-info"
                          data-tooltip={paramValue.description}
                        >
                          {paramValue.name}
                        </a>
                      </If>
                    </Else>
                  </span>
                )}
              />
            </If>

            <If test={!usageValue.parameters}>
              <div
                className="tooltip seperated-h tag is-disabled"
                data-tooltip="this means it has no parameters :)"
              >
                none
              </div>
            </If>
          </div>
        )}
      />
    </div>
  )
}
