THREE.OrbitControls=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),s=r.NONE},this.update=(j=new THREE.Vector3,L=(C=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0))).clone().inverse(),N=new THREE.Vector3,A=new THREE.Quaternion,function(){var e=n.object.position;return j.copy(e).sub(n.target),j.applyQuaternion(C),m.setFromVector3(j),n.autoRotate&&s===r.NONE&&w(2*Math.PI/60/60*n.autoRotateSpeed),m.theta+=d.theta,m.phi+=d.phi,m.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=l,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),n.target.add(u),j.setFromSpherical(m),j.applyQuaternion(L),e.copy(n.target).add(j),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor):d.set(0,0,0),l=1,u.set(0,0,0),!!(p||N.distanceToSquared(n.object.position)>c||8*(1-A.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),N.copy(n.object.position),A.copy(n.object.quaternion),p=!1,!0)}),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K,!1),n.domElement.removeEventListener("mousedown",S,!1),n.domElement.removeEventListener("wheel",z,!1),n.domElement.removeEventListener("touchstart",I,!1),n.domElement.removeEventListener("touchend",X,!1),n.domElement.removeEventListener("touchmove",M,!1),document.removeEventListener("mousemove",Z,!1),document.removeEventListener("mouseup",Y,!1),window.removeEventListener("keydown",F,!1)};var n=this,o={type:"change"},a={type:"start"},i={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},s=r.NONE,c=1e-6,m=new THREE.Spherical,d=new THREE.Spherical,l=1,u=new THREE.Vector3,p=!1,b=new THREE.Vector2,h=new THREE.Vector2,E=new THREE.Vector2,g=new THREE.Vector2,f=new THREE.Vector2,_=new THREE.Vector2,v=new THREE.Vector2,O=new THREE.Vector2,y=new THREE.Vector2;function $(){return Math.pow(.95,n.zoomSpeed)}function w(e){d.theta-=e}function P(e){d.phi-=e}var T,R,j,C,L,N,A,H,x=(H=new THREE.Vector3,function(e,t){H.setFromMatrixColumn(t,0),H.multiplyScalar(-e),u.add(H)}),k=(T=new THREE.Vector3,function(e,t){T.setFromMatrixColumn(t,1),T.multiplyScalar(e),u.add(T)}),D=(R=new THREE.Vector3,function(e,t){var o=n.domElement===document?n.domElement.body:n.domElement;if(n.object instanceof THREE.PerspectiveCamera){var a=n.object.position;R.copy(a).sub(n.target);var i=R.length();x(2*e*(i*=Math.tan(n.object.fov/2*Math.PI/180))/o.clientHeight,n.object.matrix),k(2*t*i/o.clientHeight,n.object.matrix)}else n.object instanceof THREE.OrthographicCamera?(x(e*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),k(t*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)});function U(e){n.object instanceof THREE.PerspectiveCamera?l/=e:n.object instanceof THREE.OrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(e){n.object instanceof THREE.PerspectiveCamera?l*=e:n.object instanceof THREE.OrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function S(e){if(!1!==n.enabled){var t,o,i;if(e.preventDefault(),e.button===n.mouseButtons.ORBIT){if(!1===n.enableRotate)return;t=e,b.set(t.clientX,t.clientY),s=r.ROTATE}else if(e.button===n.mouseButtons.ZOOM){if(!1===n.enableZoom)return;o=e,v.set(o.clientX,o.clientY),s=r.DOLLY}else if(e.button===n.mouseButtons.PAN){if(!1===n.enablePan)return;i=e,g.set(i.clientX,i.clientY),s=r.PAN}s!==r.NONE&&(document.addEventListener("mousemove",Z,!1),document.addEventListener("mouseup",Y,!1),n.dispatchEvent(a))}}function Z(e){if(!1!==n.enabled){var t,o,a,i;if(e.preventDefault(),s===r.ROTATE){if(!1===n.enableRotate)return;t=e,h.set(t.clientX,t.clientY),E.subVectors(h,b),o=n.domElement===document?n.domElement.body:n.domElement,w(2*Math.PI*E.x/o.clientWidth*n.rotateSpeed),P(2*Math.PI*E.y/o.clientHeight*n.rotateSpeed),b.copy(h),n.update()}else if(s===r.DOLLY){if(!1===n.enableZoom)return;a=e,O.set(a.clientX,a.clientY),y.subVectors(O,v),y.y>0?U($()):y.y<0&&V($()),v.copy(O),n.update()}else if(s===r.PAN){if(!1===n.enablePan)return;i=e,f.set(i.clientX,i.clientY),_.subVectors(f,g),D(_.x,_.y),g.copy(f),n.update()}}}function Y(e){!1!==n.enabled&&(document.removeEventListener("mousemove",Z,!1),document.removeEventListener("mouseup",Y,!1),n.dispatchEvent(i),s=r.NONE)}function z(e){var t;!1===n.enabled||!1===n.enableZoom||s!==r.NONE&&s!==r.ROTATE||(e.preventDefault(),e.stopPropagation(),(t=e).deltaY<0?V($()):t.deltaY>0&&U($()),n.update(),n.dispatchEvent(a),n.dispatchEvent(i))}function F(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&function(e){switch(e.keyCode){case n.keys.UP:D(0,n.keyPanSpeed),n.update();break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),n.update();break;case n.keys.LEFT:D(n.keyPanSpeed,0),n.update();break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),n.update()}}(e)}function I(e){if(!1!==n.enabled){var t,o,i,c,m;switch(e.touches.length){case 1:if(!1===n.enableRotate)return;t=e,b.set(t.touches[0].pageX,t.touches[0].pageY),s=r.TOUCH_ROTATE;break;case 2:if(!1===n.enableZoom)return;i=(o=e).touches[0].pageX-o.touches[1].pageX,c=o.touches[0].pageY-o.touches[1].pageY,v.set(0,Math.sqrt(i*i+c*c)),s=r.TOUCH_DOLLY;break;case 3:if(!1===n.enablePan)return;m=e,g.set(m.touches[0].pageX,m.touches[0].pageY),s=r.TOUCH_PAN;break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(a)}}function M(e){var t,o,a,i,c,m;if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===n.enableRotate||s!==r.TOUCH_ROTATE)return;t=e,h.set(t.touches[0].pageX,t.touches[0].pageY),E.subVectors(h,b),o=n.domElement===document?n.domElement.body:n.domElement,w(2*Math.PI*E.x/o.clientWidth*n.rotateSpeed),P(2*Math.PI*E.y/o.clientHeight*n.rotateSpeed),b.copy(h),n.update();break;case 2:if(!1===n.enableZoom||s!==r.TOUCH_DOLLY)return;i=(a=e).touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY,O.set(0,Math.sqrt(i*i+c*c)),y.subVectors(O,v),y.y>0?V($()):y.y<0&&U($()),v.copy(O),n.update();break;case 3:if(!1===n.enablePan||s!==r.TOUCH_PAN)return;m=e,f.set(m.touches[0].pageX,m.touches[0].pageY),_.subVectors(f,g),D(_.x,_.y),g.copy(f),n.update();break;default:s=r.NONE}}function X(e){!1!==n.enabled&&(n.dispatchEvent(i),s=r.NONE)}function K(e){e.preventDefault()}n.domElement.addEventListener("contextmenu",K,!1),n.domElement.addEventListener("mousedown",S,!1),n.domElement.addEventListener("wheel",z,!1),n.domElement.addEventListener("touchstart",I,!1),n.domElement.addEventListener("touchend",X,!1),n.domElement.addEventListener("touchmove",M,!1),window.addEventListener("keydown",F,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}});