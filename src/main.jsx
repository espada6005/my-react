// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// -------------------- Chap3 --------------------

import MyHello from './chap3/MyHello';
import EventBasic from './chap3/EventBasic';
import StateBasic from './chap3/StateBasic';
import ForList from './chap3/ForList';
import books from './chap3/books';
import ForNest from './chap3/ForNest';
import ForFiletr from './chap3/ForFiletr';
import ForSort from './chap3/ForSort';
import SelectComp from './chap3/SelectComp';
import SelectStyle from './chap3/SelectStyle';
import StyledPanel from './chap3/StyledPanel';
import TitledPanel from './chap3/TitledPanel';
import ListTemplate from './chap3/ListTemplate';
import StateParent from './chap3/StateParent';
import EventMouse from './chap3/EventMouse';
import EventCompare from './chap3/EventCompare';
import EventError from './chap3/EventError';
import EventObj from './chap3/EventObj';
import EventPoint from './chap3/EventPoint';
import EventKey from './chap3/EventKey';
import EventArgs from './chap3/EventArgs';
import EventArgs2 from './chap3/EventArgs2';
import EventPropagation from './chap3/EventPropagation';
import EventOnce from './chap3/EventOnce';
import EventPassive from './chap3/EventPassive';

const root = createRoot(document.getElementById('root'));

// #region -------------------- chap03 --------------------

// root.render(
//     <MyHello myName="鈴木" />
// );

// root.render(
//     <EventBasic type="time" />
// );

// root.render(
//     <StateBasic init={0} />
// );

// root.render(
//     <ForList src={books} />
// );

// root.render(
//     <ForNest src={books} />
// );

// root.render(
//   <ForFilter src={books} />
// );

// root.render(
//   <ForSort src={books} />
// );

// root.render(
//   <SelectComp />
// );

// root.render(
//     <SelectStyle mode="light" />
// );

// root.render(
//     <StyledPanel>
//         <p>メンバー募集中！</p>
//         <p>ようこそ、WINGSプロジェクトへ！！</p>
//         {/* <MyHello myName="鈴木" /> */}
//     </StyledPanel>
// );

// root.render(<TitledPanel
//     title={
//         <p>メンバー募集中！</p>
//     }
//     body={
//         <p>ようこそ、WINGSプロジェクトへ！！</p>
//     }>
// </TitledPanel>);

// const title = <p>メンバー募集中！</p>;
// const body = <p>ようこそ、WINGSプロジェクトへ！！</p>;
// root.render(
//     <TitledPanel title={title} body={body}></TitledPanel>
// );

// root.render(
//     <TitledPanel>
//         <p key="title">メンバー募集中！</p>
//         <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
//     </TitledPanel>
// );

// root.render(
//     <ListTemplate src={books}>
//         {elem => (
//             <>
//                 <dt>
//                     <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//                         {elem.title}（{elem.price}円）
//                     </a>
//                 </dt>
//                 <dd>{elem.summary}</dd>
//             </>
//         )}
//     </ListTemplate>
// );

// root.render(
//     <ListTemplate src={books} render={elem => (
//         <>
//             <dt>
//                 <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//                     {elem.title}（{elem.price}円）
//                 </a>
//             </dt>
//             <dd>{elem.summary}</dd>
//         </>
//     )} />
// );

// root.render(
//     <StateParent />
// );

// root.render(
//     <EventMouse
//         alt="ロゴ画像"
//         defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//         afterSrc="https://www.web-deli.com/image/home_chara.gif" />
// );

// root.render(
//     <EventCompare />
// );

// root.render(
//     <EventError src="/image/wings.jpg"
//         alt="サンプル画像" />
// );

// root.render(
//     <EventObj />
// );

// root.render(
//     <EventPoint />
// );

// root.render(
//     <EventKey />
// );

// root.render(
//     <EventArgs />
// );

// root.render(
//     <EventArgs2 />
// );

// root.render(
//     <EventPropagation />
// );

// root.render(
//     <EventOnce />
// );

root.render(
    <EventPassive />
);

// #endregion

// #region -------------------- chap04 --------------------
// root.render(
//   <StateForm />
// );

// root.render(
//   <StateFormUC />
// );

// root.render(
//   <FormTextarea />
// );

// root.render(
//   <FormSelect />
// );

// root.render(
//   <FormList />
// );

// root.render(
//   <FormRadio />
// );

// root.render(
//   <FormCheck />
// );

// root.render(
//   <FormCheckMulti />
// );

// root.render(
//   <FormFile />
// );

// root.render(
//   <StateNest />
// );

// root.render(
//   <StateNestImmer />
// );

// root.render(
//   <StateNestImmer2 />
// );

// root.render(
//   <StateTodo />
// );

// root.render(
//   <FormBasic />
// );

// root.render(
//   <FormYup />
// );

// root.render(
//   <FormJapan />
// );
// #endregion

// #region -------------------- chap05 --------------------
// root.render(
//   <LazyBasic />
// );

// root.render(
//   <LazyMulti />
// );

// root.render(
//   <SuspenseSimple />
// );

// root.render(
//   <SuspenseResult />
// );

// root.render(
//   <ProfilerBasic />
// );

// root.render(
//   <ModuleBasic />
// );

// root.render(
//   <>
//     <h3 className="head">CSS Modules</h3>
//     <ModuleBasic />
//   </>
// );

// root.render(
//   <ModuleTheme theme={style1} />
// );

// root.render(
//   <ModuleNest />
// );

// root.render(
//   <EmotionBasic />
// );

// const global = css`
//   body {
//     background-color: Yellow;
//   }
// `;

// root.render(
//   <>
//     <Global styles={global} />
//     <EmotionBasic />
//   </>
// );

// root.render(
//   <EmotionStyled />
// );

// root.render(
//   <>
//     <MyButton>ボタン</MyButton>
//     <MyStyledButton>ボタン</MyStyledButton>
//   </>
// );

// root.render(
//   <EmotionProps />
// );

// root.render(
//   <MotionBasic />
// );

// root.render(
//   <MotionWhile />
// );

// root.render(
//   <MotionExit />
// );

// root.render(
//   <MotionRepeat />
// );

// root.render(
//   <MotionAll />
// );

// root.render(
//   <MotionVariant />
// );

// root.render(
//   <MotionNest />
// );

// root.render(
//   <MotionFrame />
// );

// root.render(
//   <>
//     <div id="dialog"></div>
//     <PortalBasic />
//   </>
// );

// root.render(
//   <ErrorRoot />
// );

// root.render(
//   <ErrorRetryRoot />
// );

// root.render(
//   <ErrorEventRoot />
// );

// root.render(
//   <MetaBasic />
// );

// root.render(
//   <ScriptBasic />
// );

// root.render(
//   <StyleBasic />
// );

// root.render(
//   <StyleInline />
// );
// #endregion

// #region -------------------- chap06 --------------------
// root.render(
//   <MaterialBasic />
// );

// root.render(
//   <MaterialDrawer />
// );

// root.render(
//   <MaterialGrid />
// );

// root.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <MaterialBasic />
//   </ThemeProvider>
// );

// root.render(
//   <MaterialMode />
// );

// root.render(
//   <FormMui />
// );

// root.render(
//   <SWRPre />
// );

// root.render(
//   <SWRBasic />
// );

// root.render(
//   <SWRApp />
// );

// root.render(
//   <SWRCompare />
// );

// root.render(
//   <SWRRender />
// );

// #endregion

// #region -------------------- chap07 --------------------
// root.render(
//   <StateEffect init={0} />
// );

// root.render(
//   <HookTimer init={10} />
// );

// root.render(
//   <HookEffect init={10} />
// );

// root.render(
//   <HookRefNg />
// );

// root.render(
//   <HookRef />
// );

// root.render(
//   <HookRefForward />
// );

// root.render(
//   <HookCallbackRef />
// );

// root.render(
//   <HookReducer init={0} />
// );

// root.render(
//   <HookReducerUp init={0} />
// );

// root.render(
//   <HookReducerInit init={0} />
// );

// root.render(
//   <HookContext />
// );

// root.render(
//   <MyThemeProvider>
//     <HookThemeButton />
//   </MyThemeProvider>
// );

// function fetchInfo() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Promiseの結果です！'), 5000);
//   });
// }

// root.render(
//   <Suspense fallback={<div>Loading...</div>}>
//     <UsePromise service={fetchInfo()} />
//   </Suspense>
// );

// root.render(
//   <JotaiCounter />
// );

// root.render(
//   <JotaiTodo />
// );

// root.render(
//   <Suspense fallback={<div>Loading...</div>}>
//     <JotaiAsync />
//   </Suspense>
// );

// root.render(
//   <JotaiTodoUp />
// );

// root.render(
//   <>
//     <JotaiCounter />
//     <JotaiCounter />
//     <JotaiCounter />
//   </>
// );

// root.render(
//   <>
//     <Provider>
//       <JotaiCounter />
//     </Provider>
//     <Provider>
//       <JotaiCounter />
//     </Provider>
//     <Provider>
//       <JotaiCounter />
//     </Provider>
//   </>
// );

// const store = createStore();
// root.render(
//   <>
//     <Provider store={store}>
//       <JotaiCounter />
//     </Provider>
//     <Provider>
//       <JotaiCounter />
//     </Provider>
//     <Provider store={store}>
//       <JotaiCounter />
//     </Provider>
//   </>
// );
// #endregion

// #region -------------------- chap08 --------------------
// root.render(
//   <HookMemo />
// );

// root.render(
//   <HookTransition />
// );

// root.render(
//   <HookDeferred />
// );

// root.render(
//   <HookDeferredTransition />
// );

// root.render(
//   <ActionPre />
// );

// root.render(
//   <ActionBasic />
// );

// root.render(
//   <ActionOptimistic />
// );

// root.render(
//   <HookCustom />
// );
// #endregion

// #region -------------------- column --------------------
// root.render(
//   <MyStore />
// );
// #endregion
