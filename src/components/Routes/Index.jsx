import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../../App'
import Form from '../Form'
import DisplayBugs from '../DisplayBugs'
import Bug from '../Bug'
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
               <Routes>
                   <Route path='/' exact element={<App />}>
                        <Route path='form' exact element={<Form />} />
                        <Route path='displaybugs' exact element={<DisplayBugs />}>
                            <Route path=':bugID' element ={<Bug />} /> 
                        </Route>
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                <p>There's nothing here! Go back and click other links</p>
                                </main>
                            }
                        />
                   </Route>
               </Routes>            
            </BrowserRouter>
        )
    }
}
export default Index