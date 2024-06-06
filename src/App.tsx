import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonRouterOutlet, IonSelect, IonSelectOption, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';
import RectangleComponent from './components/RectangleComponent';
import RhombusComponent from './components/RhombusComponent';
import SquareComponent from './components/SquareComponent';
import { Shape, Rectangle, Point, Square, Rhombus } from './geometry/geometry';

setupIonicReact();

const App: React.FC = () => {
  const [shape, setShape] = useState<Shape | null>(null);
  const [shapeType, setShapeType] = useState<string>('rectangle');
  const [dx, setDx] = useState<number>(0);
  const [dy, setDy] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [angle, setAngle] = useState<number>(0);
  const [color, setColor] = useState<string>('black');

  const createShape = () => {
    switch (shapeType) {
      case 'rectangle':
        setShape(new Rectangle(new Point(50, 50), 100, 60));
        break;
      case 'square':
        setShape(new Square(new Point(50, 50), 80));
        break;
      case 'rhombus':
        setShape(new Rhombus(new Point(100, 100), 80, 100));
        break;
      default:
        break;
    }
  };

  const handleMove = () => {
    if (shape) {
      const newShape = Object.assign(Object.create(Object.getPrototypeOf(shape)), shape);
      newShape.move(dx, dy);
      setShape(newShape);
    }
  };
  
  const handleResize = () => {
    if (shape) {
      const newShape = Object.assign(Object.create(Object.getPrototypeOf(shape)), shape);
      newShape.resize(scale);
      setShape(newShape);
    }
  };
  
  const handleRotate = () => {
    if (shape instanceof Rectangle || shape instanceof Square) {
      // Calculate the center of the shape
      const centerX = shape.topLeft.x + shape.width / 2;
      const centerY = shape.topLeft.y + shape.height / 2;
      const center = new Point(centerX, centerY);
  
      // Clone the shape and rotate
      const newShape = Object.assign(Object.create(Object.getPrototypeOf(shape)), shape);
      newShape.rotate(center, angle);
      setShape(newShape);
    } else if (shape instanceof Rhombus) {
      // Clone the shape and rotate around its center
      const newShape = Object.assign(Object.create(Object.getPrototypeOf(shape)), shape);
      newShape.rotate(shape.center, angle);
      setShape(newShape);
    }
  };
  
  const handleChangeColor = () => {
    if (shape && typeof shape.setColor === 'function') {
      const newShape = Object.assign(Object.create(Object.getPrototypeOf(shape)), shape);
      newShape.setColor(color);
      setShape(newShape);
    } else {
      console.error('Attempted to call setColor on an object without that function');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Shape Type</IonLabel>
          <IonSelect value={shapeType} onIonChange={e => setShapeType(e.detail.value)}>
            <IonSelectOption value="rectangle">Rectangle</IonSelectOption>
            <IonSelectOption value="square">Square</IonSelectOption>
            <IonSelectOption value="rhombus">Rhombus</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton onClick={createShape}>Create Shape</IonButton>
        <br />
        <br />

        <IonItem>
          <IonLabel position="stacked">Move (dx, dy)</IonLabel>
          <IonInput type="number" value={dx} placeholder="dx" onIonChange={e => setDx(parseInt(e.detail.value!, 10))} />
          <IonInput type="number" value={dy} placeholder="dy" onIonChange={e => setDy(parseInt(e.detail.value!, 10))} />
        </IonItem>
        <IonButton onClick={handleMove}>Move Shape</IonButton>
        <br />
        <br />

        <IonItem>
          <IonLabel position="stacked">Resize (scale)</IonLabel>
          <IonInput type="number" value={scale} placeholder="Scale" onIonChange={e => setScale(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonButton onClick={handleResize}>Resize Shape</IonButton>
        <br />
        <br />

        <IonItem>
          <IonLabel position="stacked">Rotate (angle)</IonLabel>
          <IonInput type="number" value={angle} placeholder="Angle" onIonChange={e => setAngle(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonButton onClick={handleRotate}>Rotate Shape</IonButton>
        <br />
        <br />

        <IonItem>
          <IonLabel position="stacked">Color</IonLabel>
          <IonInput value={color} placeholder="Color" onIonChange={e => setColor(e.detail.value!)} />
        </IonItem>
        <IonButton onClick={handleChangeColor}>Change Color</IonButton>
        <br />
        <br />

        <svg width="400" height="400">
          {shape instanceof Rectangle && <RectangleComponent rectangle={shape} />}
          {shape instanceof Square && <SquareComponent square={shape} />}
          {shape instanceof Rhombus && <RhombusComponent rhombus={shape} />}
        </svg>
      </IonContent>
    </IonPage>
  );
};

export default App;