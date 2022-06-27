
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class Board extends Component {
    state = {
        input1: '',
        input2: '',
        input3: '',
        list: []
    };
    num = 0; //추가



    // 모든 input 제어

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    //추가 명령을 수행할 함수

    handleCreate = () => {
        const { input1, input2, input3, list } = this.state;
        this.setState({
            list: list.concat({
                num: this.num, //추가
                input1: input1,
                input2: input2,
                input3: input3
            }),
            input1: '',
            input2: '',
            input3: '',
        });
        this.num += 1; //추가
    };

    //추가: 리스트 삭제할 함수
    handleRemove = num => {
        const { list } = this.state;
        const nextList = list.filter(item => {
            return item.num !== num;
        });
        this.setState({
            list: nextList
        });
    };


    render() {
        const { handleChange, handleCreate, handleRemove } = this;
        const { input1, input2, input3, list } = this.state;
        return (
            <div>
                <div>
                    <input style={{ marginLeft: '5px', width: '150px' }}
                        placeholder="목적지를 입력하세요"
                        type="text"
                        name="input1"
                        onChange={handleChange}
                        value={input1}
                    />
                    <input style={{ marginLeft: '5px', width: '150px' }}
                        placeholder="주소를 입력하세요"
                        type="text"
                        name="input2"
                        onChange={handleChange}
                        value={input2}
                    />
                    <input style={{ marginLeft: '5px', width: '150px' }}
                        placeholder="전화번호를 입력하세요"
                        type="text"
                        name="input3"
                        onChange={handleChange}
                        value={input3}
                    />
                    <button style={{
                        border: 'none',
                        borderRadius: '3px',
                        background: 'black',
                        width: '50px',
                        height: '30px',
                        marginLeft: '5px',
                        marginTop: '10px',
                        color: 'white',

                    }} onClick={handleCreate}>추가</button>
                </div>
                <div>

                    <Table style={{ margin: '0', padding: '0', width: '100%', marginTop: '10px', listStyle: 'none', textAlign: 'center',}}  striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th style={{width:'47px'}}>#</th>
                                <th style={{width:'113px'}}>목적지</th>
                                <th style={{width:'70px'}}>주소</th>
                                <th style={{width:'149px'}}>전화번호</th>
                                <th style={{width:'47px'}}>삭제</th>
                            </tr>
                        </thead>

                    </Table>
                

                    {list.map(item => {
                        return (
                            <li style={{ listStyle: 'none' }}>
                                <Table style={{ margin: '0', padding: '0', width: '100%', listStyle: 'none', textAlign: 'center', }} key={item.num} striped bordered hover variant="dark">

                                    <tbody>
                                        <tr>
                                            <td style={{width:'47px'}}>{item.num}</td>
                                            <td style={{width:'113px'}}>{item.input1}</td>
                                            <td style={{width:'70px'}}>{item.input2}</td>
                                            <td style={{width:'149px'}}>{item.input3}</td>
                                            <td style={{width:'47px'}}><button style={{
                                                border: 'none',
                                                borderRadius: '3px',
                                                background: 'red',
                                                width: '30px',
                                                height: '30px',
                                                color: 'white',
                                            }} onClick={() => handleRemove(item.num)}>X</button></td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </li>
                        );
                    })}
                </div>
            </div>
        );
    }
}


export default Board;