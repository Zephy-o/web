import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import NavbarComponent from "../../components/navbar"
import { FooterComponent } from "../../components/footer"
import { Head } from "../../components/head";
import { Button, Size, Color, Table, TableRow, TableHead, TableHeading, TableBody, TableCell, Container, CopyableCodeBlock } from "@veld/components"
import { AuthorCard } from "../../components/cards/author-card";

export default class TestPageDoNotEnter extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Head/>
        <NavbarComponent />
        <Container>
            <section className="section">
                <div className="content">
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>

                    <p>This is a longer paragraph. With <b>bold</b> text and can also have <i>italic</i> text. Sometimes <b><u>things get mixed</u></b>.</p>

                    <Table isStriped isHoverable>
                        <TableHead>
                            <TableRow>
                                <TableHeading>
                                    Name
                                </TableHeading>
                                <TableHeading>
                                    Value
                                </TableHeading>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Veld
                                </TableCell>
                                <TableCell>
                                    Certified gamer.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Not Veld
                                </TableCell>
                                <TableCell>
                                    kind of cringe.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <CopyableCodeBlock value={`import 'thisLib';

func toJSON(value: IJsonable): string {
    return thisLib.serialize(value, 'json');
}`} />
                </div>

                <div className="is-flex">
                    <AuthorCard
                        name="Zephy"
                        title="Writer"
                        avatarUrl="https://miki-cdn.nyc3.digitaloceanspaces.com/avatars/355969214806360076.png"/>
                    <AuthorCard
                        name="Veld"
                        title="Editor"
                        avatarUrl="https://miki-cdn.nyc3.digitaloceanspaces.com/avatars/121919449996460033.png"/>
                </div>
            </section>
        </Container>

        <div className="section hero is-small is-dark">
            <div className="hero-body">
                <Container>
                    <h2 className="title"><i className="fad fa-comment-dots"></i> Still not sure about a feature?</h2>
                    <p className="subtitle"> Join the Miki server and 
                        let our experiences Miki volunteers and developers assist you!</p>
                    <Button className="seperated"
                        href="/invite?ref=miki_ai" 
                        size={Size.LARGE} 
                        color={Color.INFO} 
                        value="Get support"
                        icon="fab fa-discord"
                    />
                    <Button className="seperated"
                        isOutlined
                        href="https://github.com/Mikibot/bot/wiki"
                        value="Visit the wiki!"
                        size={Size.LARGE}
                        color={Color.LIGHT}
                        icon="fad fa-books"
                    />
                </Container>
            </div>
        </div>
        
        <FooterComponent />
      </div>
    )
  }
}
